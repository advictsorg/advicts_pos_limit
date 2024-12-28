# -*- coding: utf-8 -*-
# Copyright 2024  Advicts LTD.
# Part of advicts. See LICENSE file for full copyright and licensing details.
#
###############################################################################
from odoo import fields, models


class HrEmployee(models.Model):
    """
    Inheriting the 'hr.employee' model to include a boolean field
    indicating whether an employee has discount control permissions.
    """
    _inherit = 'hr.employee'

    has_pos_discount_control = fields.Boolean(string="Discount Restrict")
    has_pos_transfer_control = fields.Boolean(string="Transfer Restrict")
    has_pos_remove_control = fields.Boolean(string="Remove Restrict")
    has_pos_qty_control = fields.Boolean(string="QTY Restrict")
