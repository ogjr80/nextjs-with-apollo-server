const Welcome: React.FC = () => {
  return (
    <div className="form-step">
      <h2 className="form-title">Welcome to the University Onboarding</h2>
      <p className="form-description">
        We are excited to have you join our community. This onboarding process will guide you through the necessary steps to ensure you are well-prepared and informed about your benefits and responsibilities.
      </p>
      <details className="mt-4 bg-gray-100 p-4 rounded-lg shadow">
        <summary className="cursor-pointer text-lg font-semibold">Instructions and Information</summary>
        <div className="mt-2 text-sm text-gray-700">
          <ol className="list-decimal pl-5 mt-2 space-y-2">
            <li>This form must be completed by members joining the University of the Witwatersrand Retirement Fund.</li>
            <li>
              We are collecting and processing your personal information for the purposes of providing services to you in connection with the Fund and its stakeholders, including services related to administering the Fund and your member record, providing you with information, obtaining information and elections from you, administering contributions and processing benefits.
            </li>
            <li>
              The processing of your personal information is in your legitimate interests or because we have an obligation in law to do so. In addition, it is in the Fund’s legitimate interests to process your personal information.
            </li>
            <li>
              The personal information we collect from you is mandatory in that if you do not give it to us, we cannot provide you with information, obtain important information and elections from you, process your contributions, administer your benefit and pay benefits to you and your beneficiaries.
            </li>
            <li>
              The Pension Funds Act and other legislation as well as regulatory standards require that we collect and process your personal information.
            </li>
            <li>
              Certain categories of sensitive personal information (e.g. race, ethnicity, religious beliefs and sex life) may be revealed on documentation that we process in order to identify the recipients of benefits under the Fund (e.g. birth certificates, marriage certificates, driving licenses and passports). You may also decide to provide us with sensitive personal information voluntarily (e.g. when raising queries or making a complaint).
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>ask us what personal information we hold about you;</li>
                <li>ask us for information about which third parties have access to your personal information;</li>
                <li>request us to delete or destroy your information if we are no longer authorised to keep it;</li>
                <li>object to us processing your personal information. Please use Form 1 in the Regulations to the Protection of Personal Information Act (’POPIA’), which is available on the Information Regulator’s website;</li>
                <li>ask us to correct or delete your personal information if it is inaccurate, irrelevant, excessive, out-of-date, incomplete, misleading or unlawfully obtained. Please use Form 2 in the Regulations to POPIA, which is available on the Information Regulator’s website.</li>
              </ul>
            </li>
          </ol>
          <p className="mt-4">
            The Promotion of Access to Information Act {"(’PAIA’)"} provides you with the right of access to information held by the Fund when you request information (under PAIA) so that you can exercise or protect your or another person’s rights. If you want to make a PAIA request of the Fund, you must use the prescribed form - Form C. You can find Form C on this website: <a href="https://www.sahrc.org.za" className="text-blue-600">www.sahrc.org.za</a>.
          </p>
          <p className="mt-4">
            For more information, please request the Fund’s PAIA Manual, which is available from the Pensions Office.
          </p>
          <p className="mt-4">
            By signing this form, you, the member, acknowledge that you have been informed of the benefits offered by the UWRF and consent to:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>your personal information being processed and disclosed by us for these purposes and that this is in your legitimate interests;</li>
            <li>us processing your health information where your benefit relates to ill-health;</li>
            <li>us processing information about your criminal or alleged criminal behavior where the Fund is withholding or making deductions from your benefit due to your alleged fraud, theft, dishonesty;</li>
            <li>us processing information about your children and beneficiaries;</li>
            <li>us processing information about your sex-life, where this is relevant to your or your {"beneficiaries’"} fund benefits;</li>
            <li>us processing information about divorce and maintenance orders to which you are a party; and</li>
            <li>us receiving information about you and your minor children from the employer and the {"employer’s"} agents and that it is in your legitimate interests to do so.</li>
          </ul>
          <p className="mt-4">
            Complaints and queries
          </p>
          <p>
            If you have complaints about the way in which we have used your personal information, you can lodge a complaint with the Information Regulator at: tel: 012 406 4818; fax: 086 500 3351; email: <a href="mailto:inforeg@justice.gov.za" className="text-blue-600">inforeg@justice.gov.za</a>; website: <a href="https://www.justice.gov.za/inforeg/" className="text-blue-600">https://www.justice.gov.za/inforeg/</a>
          </p>
        </div>
      </details>
    </div>
  );
};

export default Welcome;
