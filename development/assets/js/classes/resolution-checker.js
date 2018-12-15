import { breakpoints, mobile } from '../settings/breakpoints';

let ResolutionChecker =  class ResolutionChecker{
    constructor() {
        throw new TypeError(`ResolutionChecker is a static class.`); 
    }
    static getWindowWidth() {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    static getBreakpointsValue(breakpoint) {
        let value = ResolutionChecker.breakpoints[breakpoint];
        if (value) {
            return value;
        } else {
            throw new Error(`There is no breakpoint named ${ breakpoint }.`);
        }
    }
    static under(breakpoint) {
        return ResolutionChecker.getWindowWidth() < ResolutionChecker.getBreakpointsValue(breakpoint);
    }
    static above(breakpoint) {
        return ResolutionChecker.getWindowWidth() < ResolutionChecker.getBreakpointsValue(breakpoint);
    }
    static isMobile() {
        return ResolutionChecker.getWindowWidth() < ResolutionChecker.mobile;
    }
    static isComputer() {
        return !ResolutionChecker.isMobile();
    }
};

ResolutionChecker.breakpoints = breakpoints;
ResolutionChecker.mobile = mobile;
module.exports = ResolutionChecker;