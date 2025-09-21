const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
const { GoogleGenerativeAI } = require('@google/generative-ai');

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
    const { name, email, password, role, dob, gender, location, health_goals, prakriti_result, referral } = req.body;
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
    const { data: patientData, error: patientError } = await supabase.from('patient_profiles').insert([{ full_name: name, date_of_birth: dob, gender, location, health_goals, prakriti_result, referral }]).select();
    if (patientError) {
        return res.status(500).json({ error: patientError.message });
    }
    if (referral) {
        await supabase
            .from('practitioner_profile')
            .eq('practitioner_id', referral)
            .update({ patients: [...patients, patientData.patient_id] });
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
    const { data: dieticianData, error: dieticianError } = await supabase.from('Practitioner_Profiles').insert([{ full_name: name, registration_number, specialization, clinic_address, years_of_experience }]).select();
    if (dieticianError) {
        return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ message: 'Sign-up successful', user: data[0] });
});


app.get('/food', async (req, res) => {
    const { data, error } = await supabase
        .from('foods')
        .select('*');
    if (error) {
        return res.status(500).json({ error: error.message });
    }
    return res.status(200).json({ data: data });
});



app.post('/insertmeal', async (req, res) => {
    const { meal_type, food_name_logged, portion_size, log_timestamp, patient_id } = req.body;
    const { data, error } = await supabase.from('meal_logs').insert([{ meal_type, food_name_logged, portion_size, log_timestamp, patient_id }]).select();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ message: 'Meal logged successfully', meal: data[0] });
});


app.post('/getmeallogs', async (req, res) => {
    const { patient_id } = req.body;
    const { data, error } = await supabase.from('meal_logs').select('*').eq('patient_id', patient_id);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ data: data });
});

app.post('/insertdietplan', async (req, res) => {
    const { patient_id, meal_components, name, practitioner_id, meal_type, start_date, end_date, general_notes } = req.body;
    const { data, error } = await supabase.from('diet_plans').insert([{ patient_id, practitioner_id, name, meal_components, meal_type, start_date, end_date, general_notes }]).select();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ message: 'Diet plan created successfully', diet_plan: data[0] });
});

app.post('/getdietplans', async (req, res) => {
    const { patient_id } = req.body;
    const { data, error } = await supabase.from('diet_plans').select('*').eq('patient_id', patient_id);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ data: data });
});

app.post('/insertjournal', async (req, res) => {
    const { patient_id, log_date, log_timestamp, journal_description, title } = req.body;
    const { data, error } = await supabase.from('journal_logs').insert([{ patient_id, log_date, log_timestamp, journal_description, title }]).select();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ message: 'Journal entry created successfully', journal_entry: data[0] });
});

app.post('/getjournals', async (req, res) => {
    const { patient_id } = req.body;
    const { data, error } = await supabase.from('journal_logs').select('*').eq('patient_id', patient_id);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ data: data });
});

app.post('./insertsymptoms', async (req, res) => {
    const { patient_id, symptom_name, symptom_description, log_timestamp, severity } = req.body;
    const { data, error } = await supabase.from('symptom_logs').insert([{ patient_id, symptom_description, symptom_name, log_timestamp, severity }]).select();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ message: 'Symptom logged successfully', symptom_log: data[0] });
});

app.post('/getsymptoms', async (req, res) => {
    const { patient_id } = req.body;
    const { data, error } = await supabase.from('symptom_logs').select('*').eq('patient_id', patient_id);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ data: data });
});

app.post('/insertmessages', async (req, res) => {
    const { sender_id, receiver_id, message, timestamp } = req.body;
    const { data, error } = await supabase.from('messages').insert([{ sender_id, receiver_id, message, timestamp }]).select();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ message: 'Message sent successfully', message_log: data[0] });
});

app.post('/getmessages', async (req, res) => {
    const { user1_id, user2_id } = req.body;
    const { data, error } = await supabase.from('messages').select('*').or(`and(sender_id.eq.${user1_id},receiver_id.eq.${user2_id}),and(sender_id.eq.${user2_id},receiver_id.eq.${user1_id})`).order('timestamp', { ascending: true });
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ data: data });
});


app.post('/dietgenerator', async (req, res) => {
    const { dosh, prakriti, vikruti } = req.body;
    fetch('https://dietgen-production.up.railway.app/diet/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: "xyz", notes: "wowo", dosha: dosh, prakriti: prakriti, vikruti: vikruti })
    })
    .then(response => response.json())
    .then(data => {
        res.status(200).json({ data: data });
    })
    .catch(error => {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    });
});



app.post('/ask', async (req, res) => {
  const { age, gender, prakriti, vikruti, dosha } = req.body;

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-latest"
    });

    const prompt = `
      You are 'AyurMaa', a compassionate virtual assistant combining the knowledge of a certified dietitian with the timeless wisdom of an Ayurvedic grandmother. Your role is to offer general, non-medical wellness and lifestyle suggestions based on Ayurvedic principles.

      **CRITICAL RULES:**
      1.  **NO MEDICAL ADVICE:** Never diagnose, treat, or give prescriptions. Your suggestions must be for general well-being only.
      2.  **STRUCTURED RESPONSE:** Format your entire answer using the following markdown headings, and keep the advice in each section brief and in bullet points:
          - **☀️ Morning Ritual:**
          - **🥗 Dietary Tip:**
          - **🌿 Lifestyle Adjustment:**
          - **🍵 Soothing Remedy:**
      3.  **TONE & LANGUAGE:** Maintain a warm, caring, and encouraging tone. Use simple, easy-to-understand language. If you use a Hindi term, provide a brief English explanation in parentheses.

      **USER PROFILE:**
      - **Gender:** ${gender}
      - **Age:** ${age}
      - **Prakriti (Natural Constitution):** ${prakriti}
      - **Vikriti (Current Imbalance):** ${vikruti}
      - **Primary Dosha Imbalance:** ${dosha}

      Please generate a response following all the rules above.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const reply = response.text();

    res.json({ text: reply });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});