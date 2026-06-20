import { useState } from "react";

const Home = () => {

    const [selected, setSelected] = useState<string[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setSelected(prev =>
            e.target.checked
                ? [...prev, value]
                : prev.filter(v => v !== value)
        );


    };
    ``
    return (
        console.log("Selected", selected),
        <>
            <h1> Home</h1>
            <div className="">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value="Green"
                    onChange={handleChange}
                />
                <label className="form-check-label">Green</label>
            </div>

            <div className="">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value="Blue"
                    onChange={handleChange}
                />
                <label className="form-check-label">Blue</label>
            </div>

            <div className="">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value="Red"
                    onChange={handleChange}
                />
                <label className="form-check-label">Red</label>
            </div>
            {selected.length > 0 ? <p className="mt-3 fw-bold">
                Selected: {selected.join(", ")}
            </p> : <p> no thing selected</p>}


        </>
    )
}

export default Home;