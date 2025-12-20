export default function Models() {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">Available Models</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-100 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-3">Diabetes Prediction</h2>
                    <p className="text-gray-700">
                        Predict the risk of diabetes based on factors like glucose levels, 
                        blood pressure, BMI, and more.
                    </p>
                </div>
                <div className="bg-red-100 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-3">Heart Disease Prediction</h2>
                    <p className="text-gray-700">
                        Assess your risk of heart disease using parameters such as 
                        cholesterol, blood pressure, and exercise capacity.
                    </p>
                </div>
                <div className="bg-green-100 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-3">Stroke Prediction</h2>
                    <p className="text-gray-700">
                        Evaluate stroke risk based on age, hypertension, heart disease, 
                        and lifestyle factors.
                    </p>
                </div>
            </div>
        </div>
    );
}

