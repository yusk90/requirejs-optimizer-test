define(["BaseWidgetView"],function(e){var t=e.extend({tagName:"button",className:"center__button",buttonValue:"Допомогти",initialize:function(){this.baseInitialize()},render:function(){return this.$el.attr("contenteditable",!0),this.$el.html(this.buttonValue),this.$el.append(this.editView.render().el),this}});return t});