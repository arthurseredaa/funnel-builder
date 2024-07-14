/* eslint-disable */
'use client';

import { Separator } from '@radix-ui/react-separator';
import {
  Background,
  Controls,
  MiniMap,
  Panel,
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback, useEffect, useMemo, useState } from 'react';

import ScreenDrawer from '@/components/custom/ScreenDrawer';
import { CustomEdgeType, edgeTypes } from '@/components/custom/edges';
import { CustomNodeType } from '@/components/custom/nodes';
import InputScreen from '@/components/custom/nodes/InputScreen';

/* eslint-disable */

const Flow = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const addScreen = (type: string, title: string) => {
    const newNode = {
      id: crypto.randomUUID(),
      type,
      position: { y: 0, x: (nodes.length + 1) * 400 },
      data: { label: title },
    };

    // @ts-ignore
    setNodes((nds) => [...nds, newNode]);
  };

  const onNodesChange = useCallback(
    // @ts-ignore
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    // @ts-ignore
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onConnect = useCallback(
    // @ts-ignore
    (params) =>
      // @ts-ignore
      setEdges((eds) => {
        console.log({
          params,
          eds,
        });
        return addEdge(params, eds);
      }),
    [],
  );

  useEffect(() => {
    console.log(nodes);
    console.log(edges);
  }, [nodes, edges]);

  // @ts-ignore
  const nodeColor = (node) => {
    switch (node.type) {
      case 'input':
        return '#6ede87';
      default:
        return '#6865A5';
    }
  };

  const nodeTypes = useMemo(
    () => ({
      input: InputScreen,
    }),
    [],
  );

  return (
    <ReactFlowProvider>
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
        // panOnDrag={[1, 2]}
        // selectionMode={SelectionMode.Partial}
        // panOnScroll
        // selectionOnDrag
      >
        <Panel className="flex gap-1 text-primary">
          <Separator orientation="vertical" />
          <ScreenDrawer addScreen={addScreen} />
        </Panel>
        <Controls />
        <Background />
        <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
      </ReactFlow>
    </ReactFlowProvider>
  );
};

export default Flow;
