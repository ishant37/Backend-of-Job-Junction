from sklearn.feature_extraction.text import TfidfVectorizer
import pickle
import pandas as pd
def preprocess_input(skills, experience):
    combined_data = f"{skills} {experience}"
    
    with open('models/vectorizer.pkl', 'rb') as f:
        vectorizer = pickle.load(f)
    
    input_vector = vectorizer.transform([combined_data])
    return input_vector.toarray()[0]  # Convert sparse matrix to dense format

def load_data(users_file, jobs_file):
    users = pd.read_csv(users_file, on_bad_lines='skip')
    jobs = pd.read_csv(jobs_file, on_bad_lines='skip')
    return users, jobs

def preprocess_data(users, jobs):
    users.columns = users.columns.str.strip()
    jobs.columns = jobs.columns.str.strip()
    
    if 'skills' not in users.columns:
        raise KeyError("'skills' column is missing in the Users DataFrame")
    if 'required_skills' not in jobs.columns:
        raise KeyError("'required_skills' column is missing in the Jobs DataFrame")
    
    users['skills'] = users['skills'].apply(lambda x: x.split(', '))
    jobs['required_skills'] = jobs['required_skills'].apply(lambda x: x.split(', '))
    
    return users, jobs
