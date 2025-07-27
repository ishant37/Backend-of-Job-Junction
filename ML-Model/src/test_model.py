from matchmaking_engine import find_best_matches, load_model
from data_preprocessing import load_data, preprocess_data

def test_matchmaking():
    # Load data and preprocess it
    users, jobs = load_data('data/Users.csv', 'data/Jobs.csv')
    users, jobs = preprocess_data(users, jobs)

    # Load the trained model
    vectorizer, user_skill_matrix, job_skill_matrix = load_model()
    
    # Test: Find matches for the first user
    matches = find_best_matches(0, user_skill_matrix, job_skill_matrix, jobs)
    print("Matches found for User 1:")
    print(matches)

# Run the test
if __name__ == "__main__":
    test_matchmaking()