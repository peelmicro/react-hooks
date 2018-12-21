import React, {useState} from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  // First element of the array is the name of the state value
  // Second element of the array is the name of the function used to update the state value
  // We initialize the `resource` value with `posts
  const [resource, setResource] = useState('posts');
  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
}

export default App;