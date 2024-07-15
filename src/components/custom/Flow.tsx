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
import { Connection, EdgeBase } from '@xyflow/system';
import { useEffect, useMemo, useState } from 'react';

import ScreenDrawer from '@/components/custom/ScreenDrawer';
import { CustomEdgeType, edgeTypes } from '@/components/custom/edges';
import { CustomNodeType } from '@/components/custom/nodes';
import InputScreen from '@/components/custom/nodes/InputScreen';

/* eslint-disable */
const Flow = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const addScreen = (type: string, title: string) => {
    const prevNode = nodes.length > 0 ? nodes[nodes.length - 1] : null;
    // @ts-ignore
    const prevNodeXAxis = prevNode ? prevNode.position.x : 0;
    // @ts-ignore
    const prevNodeYAxis = prevNode ? prevNode.position.y : 0;

    const newNode = {
      id: crypto.randomUUID(),
      type,
      position: { y: prevNodeYAxis, x: prevNodeXAxis + 400 },
      data: { label: title },
    };

    // @ts-ignore
    setNodes((nds) => [...nds, newNode]);

    if (prevNode) {
      // @ts-ignore
      setEdges((eds) => [
        ...eds,
        {
          id: crypto.randomUUID(),
          // @ts-ignore
          source: prevNode.id,
          target: newNode.id,
          animated: true,
        },
      ]);
    }
  };

  // @ts-ignore
  const onNodesChange = (changes) => setNodes((nds) => applyNodeChanges(changes, nds));

  // @ts-ignore
  const onEdgesChange = (changes) => setEdges((eds) => applyEdgeChanges(changes, eds));

  const onConnect = (params: EdgeBase | Connection) =>
    // @ts-ignore
    setEdges((eds) => {
      console.log({
        params,
        eds,
      });
      return addEdge(params, eds);
    });

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
