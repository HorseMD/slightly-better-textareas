var TextArea = {

    /**
     * Update a single textarea element with line numbers.
     */
    update: function(textarea) {
        var html = "";
        var height = TextArea.getHeight(textarea);

        for(var i=height.start; i<height.end; i++) {
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
     * Get the start and end height, in line-counts, of the given textarea.
     */
    getHeight: function(textarea) {
        var lineHeight = textarea.style.lineHeight || 12;
        var offset = Math.ceil(textarea.scrollTop / lineHeight);

        return {
            start: offset,
            end: textarea.rows + 1 + offset
        };
    }
};

window.addEventListener("load", function() {
    TextArea.updateAll();

    var inputs = document.querySelectorAll('textarea[data-betterta="enabled"]');
    for(var i=0; i<inputs.length; i++) {
        inputs[i].addEventListener("scroll", function() {
            TextArea.update(this);
        });
    }
});

