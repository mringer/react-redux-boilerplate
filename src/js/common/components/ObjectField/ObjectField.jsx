import React from 'react'
import PropTypes from 'prop-types'
import BaseObjectField from 'react-jsonschema-form/lib/components/fields/ObjectField'

const filterOrder = (properties, order) =>
  order.filter(prop => prop === '*' || properties.includes(prop))

const ObjectField = ({ uiSchema, ...props }) => {
  const properties = Object.keys(props.schema.properties)
  const order = uiSchema['ui:order']
  const newUISchema = order
    ? { ...uiSchema, ['ui:order']: filterOrder(properties, order) }
    : uiSchema

  return <BaseObjectField {...props} uiSchema={newUISchema} />
}

ObjectField.propTypes = {
  schema: PropTypes.object.isRequired,
  uiSchema: PropTypes.object.isRequired,
}

export default ObjectField