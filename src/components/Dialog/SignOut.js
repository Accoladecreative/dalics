
import Card from '../../ui/Layout';

const SignOut = (props) => {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }
    return (
      <Card className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
        <div className="modal-body">
         <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={cancelHandler}>
          <span aria-hidden="true">&times;</span>
        </button>
      
     
      <p>Sign out User?</p>
            </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal"  onClick={cancelHandler}>Cancel</button>
        <button type="button" className="btn btn-primary"  onClick={confirmHandler}>Sign out</button>
      </div>
    </div>
  </div>
     
     
    </Card>
  );
}


export default SignOut
