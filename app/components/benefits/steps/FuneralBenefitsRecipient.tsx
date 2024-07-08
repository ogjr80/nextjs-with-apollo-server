import { useForm } from "react-hook-form";

const FuneralBenefitsRecipient = () => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data: any ,event: any) => {
    event.preventDefault();
    reset();
  }
    return (
      <div className="form-step">
        <h2 className="form-title">Funeral Benefits Recipient</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="form-group">
            <label htmlFor="recipientName">Recipient Name</label>
            <input {...register("recipientName", {required: "Recipient Name required"})} type="text" id="recipientName" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="relationship">Relationship</label>
            <input {...register("relationship", {required: "relationship required"})} type="text" id="relationship" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="contactDetails">Contact Details</label>
            <input {...register("contactDetails", {required: "Contact details required"})} type="text" id="contactDetails" className="form-input" />
          </div>
        </form>
      </div>
    );
  };
  
  export default FuneralBenefitsRecipient;
  