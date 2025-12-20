import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Disease Prediction System</h1>
            <p className="text-xl text-gray-600 mb-8">Predict your risk for various diseases using machine learning</p>
            <div className="flex gap-4 justify-center">
                <Link 
                    to="/diabetesform" 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
                >
                    Predict Diabetes
                </Link>
                <Link 
                    to="/heartform" 
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition"
                >
                    Predict Heart Disease
                </Link>
                <Link 
                    to="/strokeform" 
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition"
                >
                    Predict Stroke
                </Link>
            </div>
        </div>
    );
}

