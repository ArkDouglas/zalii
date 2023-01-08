export default function Invite() {
  return (
    <div className="bg-slate-400 mx-10 p-4">
      <div className="invite-users-screen wf-section border border-slate-200 p-8 shadow-lg rounded-2xl">
        <div className="invite-users-screen-container">
          <div className="subheading-iu">Invite Family members to Zalii</div>
          <div className="div-block-iu">
            <div className="text-block-iu">
              Want to collaborate with family members?
              <br />
              Enter their email below!
            </div>
          </div>
          <div className="form-block w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              method="get"
              className="form-iu"
            >
              <input
                type="email"
                className="iu-text-field w-input"
                maxLength={256}
                name="email"
                data-name="Email"
                placeholder="Email Address"
                id="email"
                required
              />

              <input
                type="submit"
                defaultValue="Invite"
                data-wait="Please wait..."
                className="form-button-iu w-button"
              />
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
