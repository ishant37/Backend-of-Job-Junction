import pickle
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from data_preprocessing import load_data, preprocess_data

def load_model():
    # Load pre-trained TF-IDF vectorizer and matrices
    with open('models/tfidf_vectorizer.pkl', 'rb') as f:
        vectorizer = pickle.load(f)
    
    with open('models/user_skill_matrix.pkl', 'rb') as f:
        user_skill_matrix = pickle.load(f)

    with open('models/job_skill_matrix.pkl', 'rb') as f:
        job_skill_matrix = pickle.load(f)
    
    return vectorizer, user_skill_matrix, job_skill_matrix

def find_best_matches(user_index, user_skill_matrix, job_skill_matrix, jobs, top_n=5):
    # Calculate cosine similarity between the user and all job postings
    similarities = cosine_similarity(user_skill_matrix[user_index], job_skill_matrix).flatten()
    
    # Get indices of the top matches
    top_job_indices = similarities.argsort()[-top_n:][::-1]
    
    # Return the corresponding jobs
    return jobs.iloc[top_job_indices]

# Example usage
if __name__ == "__main__":
    # Load preprocessed data
    users, jobs = load_data('data/Users.csv', 'data/Jobs.csv')
    users, jobs = preprocess_data(users, jobs)

    # Load model and find matches for a user
    vectorizer, user_skill_matrix, job_skill_matrix = load_model()
    
    # Find best job matches for the first user (index 0)
    top_jobs = find_best_matches(0, user_skill_matrix, job_skill_matrix, jobs)
    print(top_jobs)