'use client';

import { Separator } from '@radix-ui/react-separator';
import {
  Background,
  Controls,
  MiniMap,
  Panel,
  ReactFlow,
  SelectionMode,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback, useEffect, useState } from 'react';

import ScreenDrawer from '@/components/custom/ScreenDrawer';
import { CustomEdgeType, edgeTypes, initialEdges } from '@/components/custom/edges';
import { CustomNodeType, initialNodes, nodeTypes } from '@/components/custom/nodes';

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
    <ReactFlow<CustomNodeType, CustomEdgeType>
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      fitView
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      defaultEdgeOptions={{ animated: true }}
      panOnDrag={[1, 2]}
      selectionMode={SelectionMode.Partial}
      panOnScroll
      selectionOnDrag
    >
      <Panel className="flex gap-1 text-primary">
        <Separator orientation="vertical" />
        <ScreenDrawer />
      </Panel>
      <Controls />
      <Background />
      <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
    </ReactFlow>
  );
};

export default Flow;
