import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/botton.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const stripe=useStripe();
  const elements=useElements();

  const paymentHandler=async(e)=>{
    e.preventDefault();

    if(!stripe || !elements){
      return;
    }

    
  }
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>결제 카드 정보 입력 : </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>결제하기</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;