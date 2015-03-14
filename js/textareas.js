var TextArea = {

    /**
     * Update a single textarea element with line numbers.
     */
    update: function(textarea) {
        var html = "";
        
        for(var i=0; i<TextArea.getHeight(textarea); i++) {
            html += "<span>" + (i+1) + "</span>";
        }
        
        textarea.parentNode.querySelector(".line_numbers").innerHTML = html;
    },

    /**
     * Update all textarea elements on the page which ask for 
     * it (i.e. have data-betterta="enabled" attribute)
     */
    updateAll: function() {
        var inputs = document.querySelectorAll('textarea[data-betterta="enabled"]');
        for(var i=0; i<inputs.length; i++) {
            TextArea.update(inputs[i]);
        }
    },

    /**
     * Get the height, in rows, of the given text area.
     */
    getHeight: function(textarea) {
        var lineHeight = textarea.style.lineHeight || 12;
        
        return Math.floor(textarea.scrollHeight / lineHeight);
    }
};

window.addEventListener("load", function() {
    TextArea.updateAll();
});

