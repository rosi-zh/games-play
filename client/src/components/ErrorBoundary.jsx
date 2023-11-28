import { Component  } from "react";

export default class ErrorBoundary extends Component {
    static getDerivedStateFromError(err) {
        console.log('getDerivedStateFromError');
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch');
    }

    render() {
        return this.props.children;
    }
}


