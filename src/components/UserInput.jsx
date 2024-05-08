export default function UserInput({handleInvestment, investment}){
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={investment.initialInvestment} onChange={(event) => handleInvestment('initialInvestment', event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={investment.annualInvestment} onChange={(event) => handleInvestment('annualInvestment', event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={investment.expectedReturn} onChange={(event) => handleInvestment('expectedReturn', event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={investment.duration} onChange={(event) => handleInvestment('duration', event.target.value)}/>
                </p>
            </div>
        </section>
    )
}