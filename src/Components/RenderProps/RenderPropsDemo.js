import React from 'react';
import ComponentWithRenderProps from './ComponentWithRenderProps';
import ComponentToBeRendered from './ComponentToBeRendered';

export default function RenderPropsDemo() {
  return (
    <div>
      <ComponentWithRenderProps
        color='red'
        renderComponent={<ComponentToBeRendered />}
        renderFunciton={(props) => {
          return (
            <div>
              <hr />
              <h3>This is via render function</h3>
              Prop Color: {props.color}
              <hr />
            </div>
          );
        }}
      />
    </div>
  );
}
