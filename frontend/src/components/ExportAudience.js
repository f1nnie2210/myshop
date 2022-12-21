import { useDispatch } from 'react-redux';
import { exportContacts } from '../actions/exportActions';

const ExportButton = () => {
  const dispatch = useDispatch();

  const handleExport = () => {
    dispatch(exportContacts());
  };

  return (
    <button onClick={handleExport}>Export Contacts</button>
  );
};

export default ExportButton