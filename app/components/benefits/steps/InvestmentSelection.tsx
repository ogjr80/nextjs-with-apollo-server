'use client'
import { useForm } from "react-hook-form";

const InvestmentSelection: React.FC = () => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data: any, event: any) => {
    event.preventDefault();
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-step">
      <h2 className="form-title">Investment Selection</h2>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">Personal Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="fullNames">Full Names & Surname</label>
            <input  type="text" id="fullNames" className="form-input" value="John Doe" readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="employeeNumber">Employee Number (if applicable)</label>
            <input type="text" id="employeeNumber" className="form-input" value="123456" readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="idNumber">Identity Number/Passport Number</label>
            <input type="text" id="idNumber" className="form-input" value="A1234567" readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" className="form-input" value="johndoe@example.com" readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="cellNumber">Cell Number</label>
            <input type="tel" id="cellNumber" className="form-input" value="+1234567890" readOnly />
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">Investment Options</h3>
        <p className="mt-2 text-sm text-gray-700">
          I select that my Share of Fund and all recurring monthly contributions allocated towards retirement savings henceforth be invested in the following portfolio. You may choose to change either ‘current accrued benefit’ or ‘future contributions’ or both.
        </p>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-100 text-left">Name of Portfolio</th>
                <th className="py-2 px-4 bg-gray-100 text-left">Current Accrued Benefit (%)</th>
                <th className="py-2 px-4 bg-gray-100 text-left">Future Contributions (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-t py-2 px-4">Growth Risk Profile</td>
                <td className="border-t py-2 px-4">
                  <input type="number" className="form-input" min="0" max="100" placeholder="0" />
                </td>
                <td className="border-t py-2 px-4">
                  <input type="number" className="form-input" min="0" max="100" placeholder="0" />
                </td>
              </tr>
              <tr>
                <td className="border-t py-2 px-4">Conservative Risk Profile</td>
                <td className="border-t py-2 px-4">
                  <input type="number" className="form-input" min="0" max="100" placeholder="0" />
                </td>
                <td className="border-t py-2 px-4">
                  <input type="number" className="form-input" min="0" max="100" placeholder="0" />
                </td>
              </tr>
              <tr>
                <td className="border-t py-2 px-4">Capital Protection Risk Profile</td>
                <td className="border-t py-2 px-4">
                  <input type="number" className="form-input" min="0" max="100" placeholder="0" />
                </td>
                <td className="border-t py-2 px-4">
                  <input type="number" className="form-input" min="0" max="100" placeholder="0" />
                </td>
              </tr>
              <tr>
                <td className="border-t py-2 px-4">Shariah Risk Profile</td>
                <td className="border-t py-2 px-4">
                  <input type="number" className="form-input" min="0" max="100" placeholder="0" />
                </td>
                <td className="border-t py-2 px-4">
                  <input type="number" className="form-input" min="0" max="100" placeholder="0" />
                </td>
              </tr>
              <tr>
                <td className="border-t py-2 px-4 font-semibold">Total</td>
                <td className="border-t py-2 px-4 font-semibold">
                  <input type="number" className="form-input" value="100" readOnly />
                </td>
                <td className="border-t py-2 px-4 font-semibold">
                  <input type="number" className="form-input" value="100" readOnly />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">Signature</h3>
        <div className="form-group mt-4">
          <label htmlFor="signature">Signature</label>
          <input {...register("signature", {required: "signature required"})} type="text" id="signature" className="form-input" placeholder="Signature" />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="date">Date (DD/MM/YYYY)</label>
          <input {...register("date", {required: "date required"})} type="text" id="date" className="form-input" placeholder="DD/MM/YYYY" />
        </div>
      </section>
    </form>
  );
};

export default InvestmentSelection;
