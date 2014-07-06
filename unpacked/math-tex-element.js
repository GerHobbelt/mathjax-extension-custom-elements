(function() {

    var MathTexProto = Object.create(HTMLElement.prototype);

    MathTexProto.attachedCallback = function () {
        var shadow = this.createShadowRoot();
        var jaxelem = document.createElement('script');
        jaxelem.type = "math/tex";
        if (this.getAttribute('mode') === 'display') {
          jaxelem.type += "; mode=display";
        }
        jaxelem.innerHTML = this.textContent;
        shadow.appendChild(jaxelem);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, jaxelem]);
    };

    document.registerElement('math-tex', {prototype: MathTexProto});
    
    MathJax.Ajax.loadComplete("[Contrib]/polymer-element/unpacked/custom-elements.js");

}());
