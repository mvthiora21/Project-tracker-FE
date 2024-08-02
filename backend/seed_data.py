from app import app, db, Project
import random

project_names = [
    "EcoTrack", "SmartHome", "HealthHub", "LearnLingo", "FitnessPal",
    "TravelBuddy", "TaskMaster", "BudgetWise", "RecipeGenius", "MoodJournal",
    "CodeGuardian", "PetPal", "GreenThumb", "BookWorm", "MusicMixer",
    "WeatherWiz", "ArtGallery", "QuizWhiz", "NewsFlash", "MovieBuff",
    "CryptoTracker", "VirtualCloset", "MindfulMoments", "JobHunt", "StudyBuddy",
    "SocialSphere", "FoodieFinds", "FashionForward", "TechTrends", "EcoWarrior",
    "FitnessFirst", "BrainBooster", "TravelTales", "PetParadise", "GreenGuru",
    "BookNook", "MusicMaven", "WeatherWatch", "ArtisticSoul", "QuizMaster",
    "NewsBite", "CinemaSage", "CryptoSavvy", "StyleSense", "MindfulnessApp",
    "CareerCompass", "LearnLink", "ConnectHub", "FlavourFusion", "TrendSetter",
    "TechTalk", "EcoChamp", "HealthTrack", "LanguageLab", "FitnessFusion",
    "AdventureSeeker", "ProductivityPro", "MoneyMinder", "CookingCompanion", "EmotionExplorer",
    "CodeCraft", "AnimalAlly", "PlantPal", "LiteraryLens", "SoundScape",
    "ClimateConnect", "ArtisanAlbum", "BrainTeaser", "MediaMonitor", "FilmFanatic"
]

descriptions = [
    "An eco-friendly tracking app",
    "Smart home automation system",
    "Personal health monitoring tool",
    "Language learning platform",
    "Fitness and workout planner"
]

def create_random_project():
    return Project(
        name=random.choice(project_names),
        description=random.choice(descriptions),
        github_link=f"https://github.com/user/{random.randint(1000, 9999)}",
        contributors=f"User{random.randint(1, 100)}, User{random.randint(1, 100)}",
        admin=f"Admin{random.randint(1, 10)}"
    )

def seed_projects():
    with app.app_context():
        db.drop_all()
        db.create_all()

        for _ in range(70):
            project = create_random_project()
            db.session.add(project)

        db.session.commit()
        print("Database seeded with 70 projects!")

if __name__ == "__main__":
    seed_projects()