from flask import Flask, request, jsonify
import pickle
from src.data_preprocessing import preprocess_input
from src.model_training import load_jobs

app = Flask(__name__)

# Load model and vectorizer
with open('models/ai_matchmaking_model.pkl', 'rb') as f:
    model = pickle.load(f)

jobs = load_jobs()

@app.route('/')
def home():
    return "Welcome to the AI Job Matching API!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from request
        data = request.get_json()
        
        if not data or 'skills' not in data or 'experience' not in data:
            return jsonify({'error': 'Invalid input'}), 400
        
        # Extract skills and experience from data
        skills = data.get('skills')
        experience = data.get('experience')
        
        # Preprocess input
        input_vector = preprocess_input(skills, experience)
        
        # Use kneighbors instead of predict
        distances, indices = model.kneighbors([input_vector], n_neighbors=5)
        
        # Get job recommendations based on the indices
        job_recommendations = [jobs.iloc[index].to_dict() for index in indices[0]]
        
        return jsonify({'recommended_jobs': job_recommendations})
    except Exception as e:
        app.logger.error(f"Error: {e}")
        return jsonify({'error': str(e)})

if __name__ == "__main__":
    app.run(debug=True)