import { useState } from 'react';

export default function HeartForm() {
    const [formData, setFormData] = useState({
        age: '',
        sex: 'male',
        cp: '0',
        trestbps: '',
        chol: '',
        fbs: false,
        restecg: '0',
        thalach: '',
        exang: false,
        oldpeak: '',
        slope: '0',
        ca: '0',
        thal: '1'
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
            const response = await fetch('http://localhost:8000/predict_heart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    age: parseInt(formData.age),
                    sex: formData.sex,
                    cp: formData.cp,
                    trestbps: parseInt(formData.trestbps),
                    chol: parseInt(formData.chol),
                    fbs: formData.fbs,
                    restecg: formData.restecg,
                    thalach: parseInt(formData.thalach),
                    exang: formData.exang,
                    oldpeak: parseInt(formData.oldpeak),
                    slope: formData.slope,
                    ca: formData.ca,
                    thal: formData.thal
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
            <h1 className="text-3xl font-bold mb-6">Heart Disease Prediction</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-2">Age (25-99)</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        min="25"
                        max="99"
                    />
                </div>
                <div>
                    <label className="block mb-2">Sex</label>
                    <select
                        name="sex"
                        value={formData.sex}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2">Chest Pain Type</label>
                    <select
                        name="cp"
                        value={formData.cp}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2">Resting Blood Pressure (90-199)</label>
                    <input
                        type="number"
                        name="trestbps"
                        value={formData.trestbps}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        min="90"
                        max="199"
                    />
                </div>
                <div>
                    <label className="block mb-2">Cholesterol (100-599)</label>
                    <input
                        type="number"
                        name="chol"
                        value={formData.chol}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        min="100"
                        max="599"
                    />
                </div>
                <div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="fbs"
                            checked={formData.fbs}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Fasting Blood Sugar &gt; 120 mg/dl
                    </label>
                </div>
                <div>
                    <label className="block mb-2">Resting ECG</label>
                    <select
                        name="restecg"
                        value={formData.restecg}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2">Max Heart Rate (70-209)</label>
                    <input
                        type="number"
                        name="thalach"
                        value={formData.thalach}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        min="70"
                        max="209"
                    />
                </div>
                <div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="exang"
                            checked={formData.exang}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Exercise Induced Angina
                    </label>
                </div>
                <div>
                    <label className="block mb-2">Oldpeak (0-6)</label>
                    <input
                        type="number"
                        name="oldpeak"
                        value={formData.oldpeak}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        min="0"
                        max="6"
                    />
                </div>
                <div>
                    <label className="block mb-2">Slope</label>
                    <select
                        name="slope"
                        value={formData.slope}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2">Number of Major Vessels</label>
                    <select
                        name="ca"
                        value={formData.ca}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2">Thal</label>
                    <select
                        name="thal"
                        value={formData.thal}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="1">1 - Normal</option>
                        <option value="2">2 - Fixed Defect</option>
                        <option value="3">3 - Reversible Defect</option>
                    </select>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded disabled:opacity-50"
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

