import {shallow, mount, describeWithDOM} from 'enzyme';
import React from 'react';
import {expect} from 'chai';
import sinon from 'sinon';
import {Example} from 'app/example';

const items = [{value: 'Foo'}, {value: 'Bar'}];

describeWithDOM('<Example/>', ()=>{
  it('renders a list of <li> items', ()=> {
    const wrapper = mount(<Example items={items}/>);
    expect(wrapper.find('li')).to.have.length(2);
  });

  it('calls the addButton action when add button is clicked', ()=> {
    const spy = sinon.spy();
    const wrapper = mount(<Example addItem={spy} items={items}/>);

    wrapper.ref('addButton').simulate('click');
    expect(spy.calledOnce).to.be.true;
  });
});
