'use client'
import { useForm } from "react-hook-form";

const DeclarationByEmployee: React.FC = () => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data: any, event: any) => {
    event.preventDefault();
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-step">
      <h2 className="form-title">Declaration by the Employee</h2>

      <p className="mt-2 text-sm text-gray-700">
        I understand that the above elections of benefits are irrevocable except that, within 30 days of the following happening:
      </p>
      <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-2">
        <li>
          I may elect the spouse{"’"}s pension benefit should I marry or re-marry. Similarly, I may deselect the benefit should I become divorced or widowed.
        </li>
        <li>
          I may elect the children’s pension benefit should any children become eligible. Similarly, I may deselect the benefit should my children become ineligible.
        </li>
      </ul>

      <div className="mt-6">
        <h1 className="block text-sm text-gray-700 mb-2">
          Signed at:
        </h1>
        <div className="flex items-center space-x-3">
          <input {...register("location", {required: "location required"})} type="text" id="location" className="form-input w-1/3" placeholder="Location" />
          <span>on this</span>
          <input  {...register("day", {required: "day required"})} type="text" id="day" className="form-input w-12" placeholder="Day" />
          <span>day of</span>
          <input  {...register("month", {required: "month required"})} type="text" id="month" className="form-input w-20" placeholder="Month" />
          <span>20</span>
          <input  {...register("year", {required: "year required"})} type="text" id="year" className="form-input w-12" placeholder="Year" />
        </div>
      </div>

      <div className="form-group mt-6">
        <label htmlFor="employeeSignature" className="block text-sm text-gray-700 mb-2">Employee’s Signature</label>
        <input {...register("employeeSignature", {required: "Signature required"})} type="text" id="employeeSignature" className="form-input" placeholder="Signature" />
      </div>
    </form>
  );
};

export default DeclarationByEmployee;

