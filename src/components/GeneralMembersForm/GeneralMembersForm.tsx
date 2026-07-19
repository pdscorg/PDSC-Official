import { useState } from "react";
import "./GeneralMembersForm.css";
import formJson from "../../assets/data/formData.json";
import DropdownInput from "../../sub_components/FormComponents/DropDown";
import LongAnswerInput from "../../sub_components/FormComponents/LongAnswer";
import ShortAnswerInput from "../../sub_components/FormComponents/ShortAnswer";
import { FormProvider, useForm, type FieldValues } from "react-hook-form";

const isFormClosed = true;
interface FormFieldOption {
  label: string;
}

interface FormField {
  label: string;
  type: "SHORT_ANSWER" | "LONG_ANSWER" | "DROPDOWN";
  id: string;
  required: boolean;
  options?: FormFieldOption[];
}

interface GoogleFormConfig {
  action: string;
  fields: FormField[];
}

const form = formJson as GoogleFormConfig;

// Google's published-form action path already includes the "e/<id>" segment.
const GOOGLE_FORM_SUBMIT_URL = `https://docs.google.com/forms/d/${form.action}/formResponse`;

function renderField(field: FormField) {
  const { id, type, label } = field;

  switch (type) {
    case "SHORT_ANSWER":
      return <ShortAnswerInput id={id} key={id} placeholder={label} />;
    case "LONG_ANSWER":
      return <LongAnswerInput id={id} key={id} placeholder={label} />;
    case "DROPDOWN":
      return <DropdownInput id={id} key={id} placeholder={label} options={field.options ?? []} />;
    default:
      return null;
  }
}

export default function GeneralMembersForm() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const methods = useForm();

  const onSubmit = async (data: FieldValues) => {
    setIsDisabled(true);

    const params = new URLSearchParams();
    form.fields.forEach((field) => {
      const value = data[field.id];
      if (value !== undefined && value !== null) {
        params.append(`entry.${field.id}`, String(value));
      }
    });

    try {
      // Google Forms doesn't send CORS headers, so the response is opaque
      // ("no-cors"). A resolved fetch (no thrown network error) is the only
      // signal available and is treated as a successful submission.
      await fetch(GOOGLE_FORM_SUBMIT_URL, {
        method: "POST",
        mode: "no-cors",
        body: params,
      });
      setShowSuccessMsg(true);
      methods.reset();
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Form submission failed!");
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <section className="section coming-soon" data-section="section3" id="application_form">
      {isFormClosed ? (
        <div></div>
      ) : (
        <div>
          <div className="section-heading">
            <h2>Join our Enthusiastic Team</h2>
          </div>
          <div className="continer centerIt">
            <div>
              <h4
                style={{
                  textAlign: "center",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                }}
              >
                Wanna be a part of it?
                <em style={{ color: "#44aa70" }}>
                  &nbsp; Application for the year 2026-2027 is open!
                </em>
              </h4>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="right-content">
                  <div className="top-content">
                    <h6>
                      Register and be a part of
                      <em style={{ color: "#44aa70" }}>&nbsp;the journey&nbsp; </em>
                      where you learn leadership & other skills
                    </h6>
                  </div>
                  <FormProvider {...methods}>
                    <form
                      onSubmit={methods.handleSubmit(onSubmit)}
                      style={{ position: "relative" }}
                    >
                      <div className="row">
                        <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                          {form.fields.slice(0, 3).map(renderField)}
                        </div>
                        <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                          {form.fields.slice(3, 6).map(renderField)}
                        </div>
                      </div>
                      <div className="row mt">
                        <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                          {form.fields.slice(6, 7).map(renderField)}
                        </div>
                        <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                          {form.fields.slice(7, 8).map(renderField)}
                        </div>
                      </div>
                      <div className="row mt">
                        <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                          {form.fields.slice(8, 9).map(renderField)}
                        </div>
                        <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                          <fieldset className="form__submit__contents">
                            <strong style={{ color: "white", textAlign: "center" }}>
                              Application for the year 2026-2027 is Open!
                            </strong>
                            <button
                              disabled={isDisabled}
                              type="submit"
                              id="form-submit"
                              className={`button ${isDisabled && "submitting"}`}
                            >
                              {isDisabled ? "Submitting" : "Submit"}
                            </button>
                          </fieldset>
                          {showSuccessMsg && (
                            <div id="success-message" className="alert alert-success">
                              Your form has been submitted successfully!
                            </div>
                          )}
                        </div>
                      </div>
                    </form>
                  </FormProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
