
import Card from '../../ui/Layout';

const SignOut = (props) => {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }
    return (
      <Card class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
        <div class="modal-body">
         <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={cancelHandler}>
          <span aria-hidden="true">&times;</span>
        </button>
      
     
      <p>Sign out User?</p>
            </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal"  onClick={cancelHandler}>Close</button>
        <button type="button" class="btn btn-primary"  onClick={confirmHandler}>Save changes</button>
      </div>
    </div>
  </div>
     
     
    </Card>
  );
}


export default SignOut
