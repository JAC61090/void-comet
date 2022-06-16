import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Table() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size='md' className='col-example'>
          One of three columns
        </MDBCol>
        <MDBCol size='md' className='col-example'>
          One of three columns
        </MDBCol>
        <MDBCol size='md' className='col-example'>
          One of three columns
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Table