'use client'
import { useForm } from "react-hook-form";

const VoluntaryRiskBenefitElection: React.FC = () => {
  const {register, reset, handleSubmit } = useForm();

  const onSubmit = (data: any, event: any) => {
    event.preventDefault();
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-step">
      <h2 className="form-title">Voluntary Risk Benefit Elections</h2>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">SPOUSE’S PENSION UPON YOUR DEATH, PRIOR TO AGE 65</h3>
        <p className="mt-2 text-sm text-gray-700">Please tick the appropriate box below, to indicate your selection:</p>

        <div className="mt-4 space-y-2">
          <div className="form-group">
            <label className="flex items-center space-x-3">
            <input {...register("electSpouse", { required: "Please select an option" })} type="radio" id="electSpouse" className="form-checkbox" />
              <span>I elect this benefit</span>
            </label>
          </div>
          <div className="form-group">
            <label className="flex items-center space-x-3">
            <input {...register("delectSpouse", { required: "Please select an option" })} type="radio" id="delectSpouse" className="form-checkbox" />
              <span>I do not elect this benefit</span>
            </label>
          </div>
        </div>

      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">CHILDREN’S PENSION UPON YOUR DEATH, PRIOR TO AGE 65</h3>
        <p className="mt-2 text-sm text-gray-700">Please tick the appropriate box below, to indicate your selection:</p>
        <div className="mt-4 space-y-2">
          <div className="form-group">
            <label className="flex items-center space-x-3">
            <input {...register("electChildren", { required: "Please select an option" })} type="radio" id="electChildren" className="form-checkbox" />
              <span>I elect this benefit</span>
            </label>
          </div>
          <div className="form-group">
            <label className="flex items-center space-x-3">
            <input {...register("delectChildren", { required: "Please select an option" })} type="radio" id="delectChildren" className="form-checkbox" />
              <span>I do not elect this benefit</span>
            </label>
          </div>
        </div>
      </section>
    </form>
  );
};

export default VoluntaryRiskBenefitElection;
