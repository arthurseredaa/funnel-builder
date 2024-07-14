'use client';

import {
  Background,
  Controls,
  MiniMap,
  Panel,
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },

  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

const Flow = () => {
  const [screenName, setScreenName] = useState<string>('');
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const addScreen = () => {
    setNodes((nodes) => [
      ...nodes,
      {
        id: screenName,
        type: 'default',
        data: { label: screenName },
        position: { x: 250, y: 250 },
      },
    ]);

    setScreenName('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setScreenName(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addScreen();
  };

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  useEffect(() => {
    console.log(nodes);
    console.log(edges);
  }, [nodes, edges]);

  const nodeColor = (node) => {
    switch (node.type) {
      case 'input':
        return '#6ede87';
      case 'output':
        return '#6865A5';
      default:
        return '#ff0072';
    }
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      fitView
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      defaultEdgeOptions={{ animated: true }}
      // panOnDrag={[1, 2]}
      // selectionMode={SelectionMode.Partial}
      // panOnScroll
      // selectionOnDrag
    >
      <Panel>
        <form className="flex" onSubmit={handleSubmit}>
          <Input placeholder="Enter screen name" className="text-primary" onChange={handleChange} />
          <Button type="submit">Add</Button>
        </form>
      </Panel>
      <Controls />
      <Background />
      <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
    </ReactFlow>
  );
};

export default Flow;
