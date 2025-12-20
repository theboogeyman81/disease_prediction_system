import { useState } from 'react';

export default function DiabetesForm() {
    const [formData, setFormData] = useState({
        pregnancies: '',
        glucose: '',
        bloodPressure: '',
        skinThickness: '',
        insulin: '',
        weight: '',
        diabetesPedigree: '',
        age: ''
    });
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);

        try {
            const response = await fetch('http://localhost:8000/predict_diabetes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    pregnancies: parseInt(formData.pregnancies),
                    glucose: parseInt(formData.glucose),
                    bloodPressure: parseInt(formData.bloodPressure),
                    skinThickness: parseInt(formData.skinThickness),
                    insulin: parseInt(formData.insulin),
                    weight: parseInt(formData.weight),
                    diabetesPedigree: parseFloat(formData.diabetesPedigree),
                    age: parseInt(formData.age)
                })
            });

            const data = await response.json();
            setResult(data);
        } catch (error) {
            setResult({ error: 'Failed to get prediction. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Diabetes Prediction</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-2">Pregnancies (0-19)</label>
                    <input
                        type="number"
                        name="pregnancies"
                        value={formData.pregnancies}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        min="0"
                        max="19"
                    />
                </div>
                <div>
                    <label className="block mb-2">Glucose (0-199)</label>
                    <input
                        type="number"
                        name="glucose"
                        value={formData.glucose}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        min="0"
                        max="199"
                    />
                </div>
                <div>
                    <label className="block mb-2">Blood Pressure (0-149)</label>
                    <input
                        type="number"
                        name="bloodPressure"
                        value={formData.bloodPressure}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        min="0"
                        max="149"
                    />
                </div>
                <div>
                    <label className="block mb-2">Skin Thickness (0-99)</label>
                    <input
                        type="number"
                        name="skinThickness"
                        value={formData.skinThickness}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        min="0"
                        max="99"
                    />
                </div>
                <div>
                    <label className="block mb-2">Insulin (0-899)</label>
                    <input
                        type="number"
                        name="insulin"
                        value={formData.insulin}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        min="0"
                        max="899"
                    />
                </div>
                <div>
                    <label className="block mb-2">Weight (kg, min 20)</label>
                    <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        min="20"
                    />
                </div>
                <div>
                    <label className="block mb-2">Diabetes Pedigree Function (0-2.99)</label>
                    <input
                        type="number"
                        step="0.01"
                        name="diabetesPedigree"
                        value={formData.diabetesPedigree}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        min="0"
                        max="2.99"
                    />
                </div>
                <div>
                    <label className="block mb-2">Age (20-99)</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        min="20"
                        max="99"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded disabled:opacity-50"
                >
                    {loading ? 'Predicting...' : 'Predict'}
                </button>
            </form>

            {result && (
                <div className="mt-6 p-4 bg-gray-100 rounded">
                    {result.error ? (
                        <p className="text-red-600">{result.error}</p>
                    ) : (
                        <div>
                            <h3 className="font-bold text-lg">Prediction Result:</h3>
                            <p>Predicted Category: {result.predicted_category}</p>
                            <p>Confidence: {(result.confidence * 100).toFixed(2)}%</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

