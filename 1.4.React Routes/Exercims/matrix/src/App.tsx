import { useState } from 'react';

const MatrixComponent = () => {
  const [matrix, setMatrix] = useState('');

  const getRows = () => {
    return matrix.split('\n').map(nums => nums.split(' ').map(row => +row));
  };

  const getColumns = () => {
    const rows = getRows();
    return rows[0].map((_, index) => rows.map(row => row[index]));
  };

  return (
    <div>
      <textarea
        value={matrix}
        onChange={(e) => setMatrix(e.target.value)}
        rows={10}
        cols={30}
      />
      <div>
        <h3>Rows:</h3>
        <pre>{JSON.stringify(getRows(), null, 2)}</pre>
      </div>
      <div>
        <h3>Columns:</h3>
        <pre>{JSON.stringify(getColumns(), null, 2)}</pre>
      </div>
    </div>
  );
};

export default MatrixComponent;
