import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import NearestNeighbors
import pandas as pd

def load_jobs():
    jobs_df=pd.read_csv('data/jobs.csv')
    return jobs_df

def train_model():
    # Load and preprocess data
    users = pd.read_csv('data/users.csv')
    jobs = pd.read_csv('data/jobs.csv')
    
    vectorizer = TfidfVectorizer()
    X_users = vectorizer.fit_transform(users['skills'])
    X_jobs = vectorizer.transform(jobs['required_skills'])
    
    model = NearestNeighbors(n_neighbors=5)
    model.fit(X_jobs)
    
    # Save the model and vectorizer
    with open('models/ai_matchmaking_model.pkl', 'wb') as f:
        pickle.dump(model, f)
    with open('models/vectorizer.pkl', 'wb') as f:
        pickle.dump(vectorizer, f)

if __name__ == "__main__":
    train_model()
