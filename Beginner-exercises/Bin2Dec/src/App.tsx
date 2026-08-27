import { useState } from 'react'

function App() {
    const [binary, setBinary] = useState<string>("");
    const [decimal, setDecimal] = useState<number>();
    const [error, setError] = useState<string>("");

    const handleBinaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError("");
        const bin = e.target.value;
        setBinary(bin);

        if (bin === "") {
            setDecimal(undefined);
            return;
        };

        for (let i = 0; i < bin.length; i++) {
            if (bin[i] !== '1' && bin[i] !== '0') {
                setDecimal(undefined);
                setError("Binary value has to be 1 or 0");
                return;
            }
        };

        const dec = parseInt(bin, 2);

        setDecimal(dec);
    };

    return (
        <div className='container card shadow-sm rounded-3'>
            <div className='d-flex flex-column align-items-center card-body gap-3'>
                <h1>Binary to decimal converter</h1>
                <input
                    className='form-control w-25'
                    value={binary}
                    onChange={handleBinaryChange}
                    maxLength={8}
                ></input>
                {error && <p>{error}</p>}
                <input
                    className='form-control w-25'
                    readOnly
                    value={decimal ?? ""}
                ></input>
            </div>
        </div>
    );
}

export default App