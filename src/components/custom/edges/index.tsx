import type { BuiltInEdge, Edge, EdgeTypes } from '@xyflow/react';

import ButtonEdge, { type ButtonEdge as ButtonEdgeType } from './ButtonEdge';

export const initialEdges = [
  { id: 'A->C', source: 'A', target: 'A', animated: true },
  { id: 'b->d', source: 'B', target: 'D', type: 'button-edge' },
  { id: 'c->d', source: 'C', target: 'D', animated: true },
] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
  'button-edge': ButtonEdge,
} satisfies EdgeTypes;

// Append the types of you custom edges to the BuiltInEdge type
export type CustomEdgeType = BuiltInEdge | ButtonEdgeType;
