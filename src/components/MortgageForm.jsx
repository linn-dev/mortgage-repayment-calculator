
export default function MortgageForm() {
    return (
        <div className="p-10 h-[500px] bg-white text-slate-900 flex flex-col justify-between">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Mortgage Calculator</h1>
                <button type="button" className="underline text-md hover:cursor-pointer">Clear All</button>
            </div>


            <form action="" className="h-full mt-8 flex flex-col items-start justify-between">
                <div className="flex flex-col">
                    <label htmlFor="mortgageAmount" className="mb-3 text-xl font-medium text-slate-400">Mortgage Amount</label>
                    <input type="text" id="mortgageAmount" className="w-full h-10 pl-3 text-2xl font-bold outline-2 outline-slate-400 rounded-md" placeholder="Mortgage Amount" />
                </div>
                <div className="w-full flex justify-between">
                    <div className="flex flex-col">
                        <label htmlFor="mortgageTerm">Mortgage Term</label>
                        <input type="text" id="mortgageTerm" className="outline-2"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="interestRate">Interest Rate</label>
                        <input type="text" id="interestRate" className="outline-2"/>
                    </div>
                </div>
                <div>
                    <p>Mortgage Type</p>
                    <input type="radio" id="repayment" name="mortgageType" value="repayment"/>
                    <label htmlFor="repayment">Repayment</label><br/>
                    <input type="radio" id="interestOnly" name="mortgageType" value="interestOnly"/>
                    <label htmlFor="interestOnly">Interest Only</label><br/>
                </div>
            </form>
        </div>
    )
}