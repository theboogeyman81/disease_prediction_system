export default function About() {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">About Disease Prediction System</h1>
            <div className="space-y-4 text-lg">
                <p>
                    This system uses machine learning models to predict the risk of various diseases 
                    including diabetes, heart disease, and stroke.
                </p>
                <p>
                    Simply fill out the forms with your health information, and our AI models will 
                    analyze the data to provide you with predictions and confidence scores.
                </p>
                <p className="mt-8 text-gray-600">
                    <strong>Note:</strong> This is a prediction tool and should not replace professional 
                    medical advice. Always consult with healthcare professionals for medical decisions.
                </p>
            </div>
        </div>
    );
}

