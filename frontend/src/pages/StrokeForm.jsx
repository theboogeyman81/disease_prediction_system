import { useState } from 'react';

export default function StrokeForm() {
    const [formData, setFormData] = useState({
        gender: 'male',
        age: '',
        hypertension: false,
        heartDisease: false,
        everMarried: false,
        workType: 'Private',
        Residence_type: 'Urban',
        AvgGlucoseLevel: '',
        weight: '',
        SmokingStatus: 'never smoked'
    });
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);

        try {
            const response = await fetch('http://localhost:8000/predict_stroke', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    gender: formData.gender,
                    age: parseInt(formData.age),
                    hypertension: formData.hypertension,
                    heartDisease: formData.heartDisease,
                    everMarried: formData.everMarried,
                    workType: formData.workType,
                    Residence_type: formData.Residence_type,
                    AvgGlucoseLevel: parseInt(formData.AvgGlucoseLevel),
                    weight: parseFloat(formData.weight),
                    SmokingStatus: formData.SmokingStatus
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
            <h1 className="text-3xl font-bold mb-6">Stroke Prediction</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-2">Gender</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2">Age (0-99)</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        min="0"
                        max="99"
                    />
                </div>
                <div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="hypertension"
                            checked={formData.hypertension}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Hypertension
                    </label>
                </div>
                <div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="heartDisease"
                            checked={formData.heartDisease}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Heart Disease
                    </label>
                </div>
                <div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="everMarried"
                            checked={formData.everMarried}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Ever Married
                    </label>
                </div>
                <div>
                    <label className="block mb-2">Work Type</label>
                    <select
                        name="workType"
                        value={formData.workType}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="Private">Private</option>
                        <option value="Self-employed">Self-employed</option>
                        <option value="Govt_Job">Government Job</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2">Residence Type</label>
                    <select
                        name="Residence_type"
                        value={formData.Residence_type}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="Urban">Urban</option>
                        <option value="Rural">Rural</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2">Average Glucose Level (55-299)</label>
                    <input
                        type="number"
                        name="AvgGlucoseLevel"
                        value={formData.AvgGlucoseLevel}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        min="55"
                        max="299"
                    />
                </div>
                <div>
                    <label className="block mb-2">Weight (kg)</label>
                    <input
                        type="number"
                        step="0.1"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        min="0"
                    />
                </div>
                <div>
                    <label className="block mb-2">Smoking Status</label>
                    <select
                        name="SmokingStatus"
                        value={formData.SmokingStatus}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="never smoked">Never Smoked</option>
                        <option value="unknown">Unknown</option>
                        <option value="formerly smoked">Formerly Smoked</option>
                    </select>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded disabled:opacity-50"
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

