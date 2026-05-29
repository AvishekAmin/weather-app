// import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  let handleClick = () => {
    console.log("Button was clicked!");
  };

  return (
    <>
      <h1>Material UI Demo</h1>
      <Button 
        startIcon={<DeleteIcon />}
        variant="contained"
        onClick={handleClick}>
        Delete
      </Button>
      <br></br><br></br>
      <Button 
        variant="contained"
        size="small"
        disabled>
        Disabled
      </Button>
      <br></br><br></br>
      <Button 
        variant="contained"
        onClick={handleClick}
        color="success">
        Success
      </Button>
    </>
  );
}

export default App;