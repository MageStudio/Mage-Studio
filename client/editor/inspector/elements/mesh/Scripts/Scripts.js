import React from 'react';
import { Select, Switch } from 'antd';

import { CodeOutlined } from '@ant-design/icons';

class Script extends React.Component {

    componentDidMount() {
        const { onScriptsMount = f => f } = this.props;

        onScriptsMount();
    }

    mapScripts = () => {
        const { list = [] } = this.props;

        return list
            .filter(script => script.type === 'script')
            .map(script => <Select.Option key={script.name}>{script.name}</Select.Option>)
    }

    handleScriptChange = (name) => {
        const { onScriptChange } = this.props;

        onScriptChange(name);
    }

    render() {
        const { onScriptSwitchChange = f => f } = this.props;

        return (
            <div>
                <div className='scene-property'>
                    <div className='label'>
                        <CodeOutlined height='8px' width='8px' className='label-icon'/>
                        <span className='label-text'>SCRIPT</span>
                    </div>
                    <div className='enabled-toggle'>
                        <span>active</span>
                        <Switch
                            onChange={onScriptSwitchChange}
                            size={"small"}
                            defaultChecked />
                    </div>
                </div>
                <div className='scene-setting'>
                    <div className='setting-row'>
                        <label className='setting-label'>
                            Name
                        </label>
                        <Select
                            onChange={this.handleScriptChange}
                            className='setting-input right'
                            size={'small'}>
                            { this.mapScripts() }
                        </Select>
                    </div>
                </div>
            </div>
        )
    }
}

export default Script;
