const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');

const app = express();
const supabaseUrl = 'https://tyjyhmevjcrqyieidfte.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const { data: users, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email);
    
    if (error) {
        return res.status(500).json({ error: error.message });
    }

    if (!users || users.length === 0) {
        return res.status(401).json({ error: 'User does not exist' });
    }

    const user = users[0];
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid password' });
    }
    
    delete user.password_hash;
    res.json({ message: 'Sign-in successful', user });
});

app.post('/patientsignup', async (req, res) => {
    const { name, email, password, role, dob, gender, location, health_goals, prakriti_result } = req.body;
    const { data: existingUser, error: checkError } = await supabase
        .from('users')
        .select('email')
        .eq('email', email);

    if (checkError) {
        return res.status(500).json({ error: checkError.message });
    }

    if (existingUser && existingUser.length > 0) {
        return res.status(409).json({ message: 'User already exists! Please login.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const { data, error } = await supabase
        .from('users')
        .insert([
            { name, email, password_hash: hashedPassword, role }
        ])
        .select(); 

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    const {data: patientData, error: patientError} = await supabase.from('Patient_Profiles').insert([{full_name: name, date_of_birth: dob,gender,location,health_goals,prakriti_result}]).select();
    if (patientError) {
        return res.status(500).json({ error: patientError.message });
    }

    res.status(201).json({ message: 'Sign-up successful', user: data[0] });
});

app.post('/dieticiansignup', async (req, res) => {
    const { name, email, password, role, registration_number, specialization, clinic_address, years_of_experience } = req.body;
    const { data: existingUser, error: checkError } = await supabase
        .from('users')
        .select('email')
        .eq('email', email);

    if (checkError) {
        return res.status(500).json({ error: checkError.message });
    }

    if (existingUser && existingUser.length > 0) {
        return res.status(409).json({ message: 'User already exists! Please login.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const { data, error } = await supabase
        .from('users')
        .insert([
            { name, email, password_hash: hashedPassword, role }
        ])
        .select(); 

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    const {data: dieticianData, error: dieticianError} = await supabase.from('Practitioner_Profiles').insert([{full_name: name, registration_number, specialization, clinic_address, years_of_experience}]).select();
    if (dieticianError) {
        return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ message: 'Sign-up successful', user: data[0] });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});