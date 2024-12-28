/** @odoo-module */
import { patch } from "@web/core/utils/patch";
import { ActionpadWidget } from "@point_of_sale/app/screens/product_screen/action_pad/action_pad";
import { ProductScreen } from "@point_of_sale/app/screens/product_screen/product_screen";
import { _t } from "@web/core/l10n/translation";
import { ErrorPopup } from "@point_of_sale/app/errors/popups/error_popup";
import { NumberPopup } from "@point_of_sale/app/utils/input_popups/number_popup";

patch(ActionpadWidget.prototype, {
    async submitOrder() {
        if (!this.clicked) {
            this.clicked = true;
            try {
                await this.pos.sendOrderInPreparationUpdateLastChange(this.currentOrder);
                this.pos.isOrderSubmitted = true;
                this.render();
            } finally {
                this.clicked = false;
            }
        }
    }
});

patch(ProductScreen.prototype, {
    onNumpadClick(buttonValue) {
        if (buttonValue == "Backspace" &&
            (this.pos.get_cashier().has_pos_remove_control === true && this.pos.isOrderSubmitted)) {
            this.popup.add(ErrorPopup, {
                title: _t("Remove Restricted"),
                body: _t("You must be granted access to Remove."),
            });
            return false;
        }
        super.onNumpadClick(buttonValue);
    },

    getNumpadButtons() {
        var self=this;
        return [
            { value: "1",},
            { value: "2",},
            { value: "3",},
            { value: "quantity", text: "Qty", disabled: this.pos.get_cashier().has_pos_qty_control===true },
            { value: "4",  },
            { value: "5",  },
            { value: "6",  },
            { value: "discount", text: "% Disc"},
            { value: "7",  },
            { value: "8",  },
            { value: "9",  },
            { value: "price", text: "Price"},
            { value: "-", text: "+/-",},
            { value: "0",  },
            { value: this.env.services.localization.decimalPoint},
            { value: "Backspace", text: "⌫", disabled: this.pos.get_cashier().has_pos_remove_control===true && this.isorderSubmitted },
        ].map((button) => ({
            ...button,
            class: this.pos.numpadMode === button.value ? "active border-primary" : "",
        }));
    }
});
