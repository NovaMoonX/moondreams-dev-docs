import AppEditor from '@/components/AppEditor';
import { useParams } from 'react-router-dom';

function Document() {
  const { documentId } = useParams<{ documentId: string }>();

  console.log('documentId', documentId); // REMOVE

  return <AppEditor />;
}

export default Document;
