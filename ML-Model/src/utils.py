import pandas as pd
import pickle
def load_csv(file_path):
    return pd.read_csv(file_path)

def save_model(model, file_path):
    with open(file_path, 'wb') as f:
        pickle.dump(model, f)

def load_model(file_path):
    with open(file_path, 'rb') as f:
        return pickle.load(f)

# Example usage for utility functions:
if __name__ == "__main__":
    users = load_csv('data/Users.csv')
    print(users.head())