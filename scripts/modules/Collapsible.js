import $ from 'jquery';

class Collapsible {
  constructor(el) {
    this.$el = $(el);
    this.setupDefaults();
    this.addListeners();
  }

  setupDefaults() {
    this.dom = {
      $trigger: this.$el.find('.js-collapse__trigger'),
      $content: this.$el.find('.js-collapse__content'),
      $accordion: this.$el.closest('.js-collapse-accordion')
    };

    this.isAccordion = this.dom.$accordion.length > 0;
    
    if (this.isAccordion) {
      this.dom.$triggers = this.dom.$accordion.find('.js-collapse__trigger');
      this.dom.$contenPanels = this.dom.$accordion.find('.js-collapse__content');
    }
  }

  addListeners() {
    this.dom.$trigger.on('click', this.expandCollapse.bind(this));
  }

  expandCollapse = (e) => {
    const expanded = $(e.currentTarget).attr('aria-expanded') === 'true';
    $(e.currentTarget).attr('aria-expanded', !expanded);
    
    if (!expanded) {
      if (this.isAccordion) {
        this.collapseOthers(this.dom.$content, this.dom.$trigger);
      }
      this.expandPanel(this.dom.$content);
    } else {
      this.collapsePanel(this.dom.$content);
    }
  }

  expandPanel = ($panel) => {
    $panel.css('height', $panel.prop('scrollHeight'));
  }

  collapsePanel = ($panel, $trigger) => {
    $panel.css('height', 0);
  }

  collapseOthers = ($panel, $trigger) => {
    this.dom.$contenPanels.not($panel).each((index, panel)=>{
      this.collapsePanel($(panel));
    });

    this.dom.$triggers.not($trigger).each((index, trigger)=>{
      $(trigger).attr('aria-expanded', 'false');
    });
  }
}

export default Collapsible;